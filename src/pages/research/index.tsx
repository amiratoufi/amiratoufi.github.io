/* eslint-disable @next/next/no-img-element */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import {unified} from 'unified';
import Hero from "@/components/Home/Hero";
import heroImage from "../../images/gibraltar_amo_2017067_lrg.jpg";
import Link from "next/link";
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import Container from '@/components/Layout/Container';
import Head from 'next/head';


interface ResearchDataProps {
  title: string,
  hero: string,
  images?: string[],
  link: string,
  content?: string,
  date?:Date 
}

interface Props {
  researchData: ResearchDataProps[]
}

const Research = ({ researchData }: Props) => {
  useEffect(() => {
    const init = async () => {
      const { Ripple, initTE } = await import("tw-elements");
      initTE({ Ripple });
    };
    init();
  }, []);

  const toKebabCase = (str:string) => {
    return str.toLowerCase().replace(/\s+/g, '-');
  };
  return (
    <>
       <Head> <title>Research</title></Head>
  
    <Layout className="pt-4">
      <Hero heroUrl={heroImage.src} heroText="Research" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
          {researchData.map((item: ResearchDataProps) => (
            <Link
              key={item.title}
              href={`/research/${encodeURIComponent(toKebabCase(item.title))}`}
              passHref
            >
              <div className="block mb-4 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div
                  className="relative overflow-hidden bg-cover bg-no-repeat"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    className="rounded-t-lg w-full h-[200px]"
                    src={`/images/${item.hero}`}
                    alt=""
                  />
                  <div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="h-20">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 overflow-hidden overflow-ellipsis">
                      {item.title}
                    </h5>
                  </div>
                  <div className="mb-4 line-clamp-4 text-base text-balance text-neutral-600 dark:text-neutral-200">
                    {/* Render HTML directly */}
                    <div dangerouslySetInnerHTML={{ __html: item.content || '' }} />
                  </div>
                  <div
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Read more
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Layout>
    </>
  );
};

export async function getStaticProps() {
  const researchDirectory = path.join(process.cwd(), 'src/data/researchData');
  const filenames = fs.readdirSync(researchDirectory);

  const researchData = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(researchDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      const processedContent = await unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeKatex)
        .use(rehypeStringify)
        .process(content);

      const hero = data.hero || '';

      // Parse month and year from metadata and format it as a serializable string
      const [month, year] = (data.date || '').split(' ');
      const date = new Date(`${year}-${month}-01`).toISOString(); 

      return {
        title: data.title,
        hero: hero,
        content: String(processedContent),
        link: data.link,
        date: date, 
      };
    })
  );

  // Sort researchData by date in descending order (newest first)
  researchData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    props: {
      researchData,
    },
  };
}

export default Research;
