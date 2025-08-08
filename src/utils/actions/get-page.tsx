import { redirect } from "next/navigation";

export const getPage = async (slug: string) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;

  // definindo o objeto de consulta pelo slug
  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug,
    }),
    props: "slug,title,content,metadata",
    read_key: process.env.READ_KEY as string,
  });

  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const res = await fetch(url, { next: { revalidate: 120 } });

    if (!res.ok) {
      throw new Error("Failed to get page.");
    }

    return res.json();
  } catch {
    redirect("/");
  }
};
