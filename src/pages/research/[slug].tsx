/* eslint-disable @next/next/no-img-element */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps, GetStaticPaths } from "next";
import Loading from "@/components/Common/Loading";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkHtml from "remark-html";
import {
  AppLayout,
  BreadcrumbGroup,
  Container,
  ContentLayout,
  Header,
  Link,
} from '@cloudscape-design/components';
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Common/Breadcrumb";



interface ResearchTypeCreated {
  title: string;
  hero: string;
  images?: string[];
  link: string;
  content?: string;
  videos?:string[];
}

interface ResearchPageProps {
  researchType: ResearchTypeCreated | null;
  pageName: string;
}


const ResearchName = ({ researchType, pageName }: ResearchPageProps) => {
  console.log("Research videos:", researchType?.videos);
  if (!researchType) {
    return (
      <AppLayout
     
        toolsHide
        content={
          <ContentLayout header={<Header variant="h1">Loading...</Header>}>
            <Container>
              <div className="flex justify-center align-middle mt-2">
                <Loading type="spinningBubbles" color="#a3a2a0" height="64px" width="64px" />
              </div>
            </Container>
          </ContentLayout>
        }
      />
    );
  }

  return (
    <>
      <Navbar />
      <AppLayout
        breadcrumbs={
          <Breadcrumb
            items={[
              { text: 'Research', href: '/research' },
              { text: researchType.title, href: `/${researchType.title}` },
            ]}
          />
        }
        toolsHide
        navigationHide
        content={
          <ContentLayout
            header={<Header variant="h1">Research - {researchType.title}</Header>}
          >
            <Container
              media={{
                content: (
                  <img
                    src={`/images/${researchType.hero}`}
                    alt="Research photo"
                    className="hero-image"
                  />
                ),
                height: 300,
                position: "top"
              }}
            >
              <div className="mb-8 bg-white rounded-md p-4">
                <h1 className="text-2xl font-semibold">{researchType.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: researchType.content || "" }} />

                {/* Render images */}
                {researchType.images &&
                  researchType.images.map((pic, index) => (
                    <div key={index} className="flex flex-row">
                      <div className="mx-auto overflow-hidden transform transition-transform hover:scale-105">
                        <img
                          className="mt-6"
                          src={`/images/${pic}`}
                          alt="Research photo"
                          width={700}
                          height={400}
                        />
                      </div>
                    </div>
                  ))}

                {/* Render videos */}
                {researchType.videos && researchType.videos.length > 0 && (
                  <div className="video-section mt-8">
                    <h2 className="text-xl font-semibold">Research Videos</h2>
                    {researchType.videos.map((video, index) => (
                      <div key={index} className="video-container my-4">
                        <video controls width="700">
                        <source src={video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Container>
          </ContentLayout>
        }
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const researchDirectory = path.join(process.cwd(), "src/data/researchData");
  const filenames = fs.readdirSync(researchDirectory);
  const paths = filenames.map((filename) => ({
    params: { slug: path.parse(filename).name },
  }));

  return {
    paths,
    fallback: true, 
  };
};

export const getStaticProps: GetStaticProps<ResearchPageProps> = async ({ params }) => {
  try {
    const { slug } = params!;
    const filePath = path.join(process.cwd(), `src/data/researchData/${slug}.md`);

    if (!fs.existsSync(filePath)) {
      return { notFound: true };
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkMath)
      .use(remarkHtml)
      .use(remarkRehype)
      .use(rehypeKatex)
      .use(rehypeStringify)
      .process(content);

    const contentHtml = processedContent.toString();

    const researchType: ResearchTypeCreated = {
      title: data.title || "",
      hero: data.hero || "",
      content: contentHtml,
      images: data.images || [],
      link: data.link || "",
      videos: data.videos || [], // Extract videos from the Markdown data
    };

    return {
      props: {
        researchType,
        pageName: slug?.toString() || "",
      },
    };
  } catch (error) {
    console.error("Error loading research data:", error);
    return { notFound: true };
  }
};


export default ResearchName;
