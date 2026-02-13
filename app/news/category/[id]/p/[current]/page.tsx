// news/catetory/[id]/p/[current]/page.tsx
// news/p/[current]/page.tsx
import { getNewsList, getCatetoryDetail } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import { notFound } from "next/navigation";
import Pagination from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

type Props = {
  params: {
    id: string;
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);
  const catetory = await getCatetoryDetail(params.id).catch(notFound);

  const { contents: news, totalCount } = await getNewsList({
    filters: `category[equals]${catetory.id}`,
    limit: NEWS_LIST_LIMIT,
    offset: 10 * (current - 1),
  });

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }
  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      <NewsList news={news} />
      <Pagination totalCount={totalCount} current={current} basePath={`/news/category/${catetory.id}`} />
    </>
  );
}
