import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import heroImage from "../images/pia.jpg";
import errorpage from "../pages/404";

import {
  CrossrefClient,
  QueryWorksParams,
} from "@jamesgopsill/crossref-client";
import Link from "next/link";
import Container from "../components/Layout/Container";
import Loading from "@/components/Common/Loading";
import Hero from "@/components/Home/Hero";
import { useRouter } from "next/router";
import Head from "next/head";

const Publications = () => {
  const [works, setWorks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  //fetch data from CrossrefClient
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const client = new CrossrefClient();

      const search: QueryWorksParams = {
        queryAuthor: "Amir Atoufi",
      };

      try {
        const response = await client.works(search);

        if (response.ok && response.status === 200) {
          setIsLoading(false);

          // Filter works by author name
          const worksByAmirAtoufi = response.content.message.items.filter(
            (work) =>
              work.author.some(
                (author) =>
                  author.given.toLowerCase().includes("amir") &&
                  author.family.toLowerCase().includes("atoufi")
              )
          );
          // Sort works by created date in descending order
          worksByAmirAtoufi.sort((a, b) => {
            const dateA: any = new Date(a.created.dateParts[0].join("-"));
            const dateB: any = new Date(b.created.dateParts[0].join("-"));
            return dateB - dateA;
          });

          setWorks(worksByAmirAtoufi);
        } else {
          console.error("Error fetching works:", response.status);
          // Redirect to the error page
          router.push("/404");
        }
      } catch (error) {
        console.error("Error fetching works:", error);
        // Redirect to the error page
        router.push("/404");
      }
    };

    fetchData();
  }, [router]);

  return (
    <>
       <Head> <title>Publications</title></Head>
    <Layout className="pt-4">
      <Hero heroUrl={heroImage.src} heroText="Publications" />
      <Container>
        {isLoading ? (
          <div className="flex justify-center mx-auto align-middle mt-2">
            <Loading
              type="spinningBubbles"
              color="#a3a2a0"
              height="64px"
              width="64px"
            />
          </div>
        ) : (
          <ul style={{ listStyleType: "circle" }} className="">
            {works.map((item: any) => (
              <li
                key={item.URL}
                className="space-y-3 p-2 mt-4 mb-4 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)"
              >
                <Link
                  className=""
                  href={item.URL}
                  style={{ listStyleType: "circle" }}
                >
                  <p className="font-semibold hover:text-blue-700">
                    {item.title[0]}.{" "}
                  </p>
                  {item.author && (
                    <p key={item.key}>
                      {item.author.map((author: any, index: number) => (
                        <span key={index}>
                          {index > 0 && index === 0 ? " " : null}
                          {author.given.toLowerCase().includes("amir") &&
                          author.family.toLowerCase().includes("atoufi") ? (
                            <strong>
                              {author.given} {author.family}
                            </strong>
                          ) : (
                            `${author.given} ${author.family}`
                          )}
                          {index < item.author.length - 1 ? ", " : ". "}
                        </span>
                      ))}
                      <span>{item.volume}</span>
                      <span>
                        {item.issue
                          ? `(${item.issue}). `
                          : `: ${item.articleNumber}. `}
                      </span>
                    </p>
                  )}
                  <p className="font-semibold">
                    {item.created.dateParts[0][0]}{" "}
                  </p>
                  <p className="italic text-gray-400 font-semibold">
                    {item.containerTitle[0]}.{" "}
                  </p>
                  <p className="text-blue-700">doi: {item.DOI}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </Layout>
    </>
  );
};

export default Publications;
