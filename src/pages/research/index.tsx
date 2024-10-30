import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import Hero from "@/components/Home/Hero";
import heroImage from "../../images/gibraltar_amo_2017067_lrg.jpg";
import Link from "next/link";
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Container from '@/components/Layout/Container';
import Head from 'next/head';
import { Spinner } from '@cloudscape-design/components';

const Research = ({ researchData }:any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    const init = async () => {
      const { Ripple, initTE } = await import("tw-elements");
      initTE({ Ripple });
    };
    init();
  }, []);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedImages === researchData.length) {
      setIsLoading(false);
    }
  }, [loadedImages, researchData.length]);

  const toKebabCase = (str:string) => str.toLowerCase().replace(/\s+/g, '-');

  return (
    <>
      <Head>
        <title>Research</title>
      </Head>
      {isLoading && <Spinner />}
      <Layout className={`${isLoading ? 'hidden' : 'pt-4'}`}>
        <Hero heroUrl={heroImage.src} heroText="Research" />
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
            {researchData.map((item:any) => (
              <Link
                key={item.title}
                href={`/research/${encodeURIComponent(toKebabCase(item.title))}`}
                passHref
              >
                <div className="block mb-4 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                      className="rounded-t-lg w-full h-[200px]"
                      src={`/images/${item.hero}`}
                      alt=""
                      onLoad={handleImageLoad}
                    />
                    <div className="absolute inset-0 h-full w-full bg-gray-900 bg-opacity-25 opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
                  </div>
                  <div className="p-6">
                    <div className="h-20">
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 overflow-hidden overflow-ellipsis">
                        {item.title}
                      </h5>
                    </div>
                    <div className="mb-4 line-clamp-4 text-base text-neutral-600 dark:text-neutral-200">
                      <div dangerouslySetInnerHTML={{ __html: item.content || '' }} />
                    </div>
                    <div className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none dark:shadow dark:hover:bg-primary-700">
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

  researchData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    props: {
      researchData,
    },
  };
}

export default Research;
