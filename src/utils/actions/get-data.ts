export const getDataHome = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22homes%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`,
      { next: { revalidate: 120 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data: " + error);
  }
};

export const getSubMenu = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22%3A%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug%2Ctitle&sort=-order`,
      { next: { revalidate: 120 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch menu data");
    }

    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch menu data: " + error);
  }
};
