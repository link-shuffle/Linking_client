const axios = require("axios");
const cheerio = require("cheerio");

const getData = html => {
  const $ = cheerio.load(html);
  let data = [];

  $("meta").each((i, elem) => {
    const attrib = elem.attribs;
    if (attrib.itemprop || attrib.property || attrib.name)
      data = [...data, attrib];
  });
  const [title, ...titleArg] = filterByTarget({ data, target: "title" });
  const [ogTitle, ...ogTitleArg] = filterByTarget({ data, target: "og:title" });
  const [desc, ...descArg] = filterByTarget({ data, target: "description" });
  const [ogDesc, ...ogDescArg] = filterByTarget({
    data,
    target: "og:description"
  });
  const [imgUrl, ...imgUrlArg] = filterByTarget({ data, target: "image" });
  const [ogImgUrl, ...ogImgUrlArg] = filterByTarget({
    data,
    target: "og:image"
  });

  return {
    title: ogTitle ? ogTitle.content : title.content,
    desc: ogDesc ? ogDesc.content : desc.content,
    imgUrl: ogImgUrl ? ogImgUrl.content : imgUrl.content
  };
};

const filterByTarget = ({ data, target }) => {
  return data.filter(
    elem =>
      elem.itemprop === target ||
      elem.property === target ||
      elem.name === target
  );
};

(async () => {
  const url = "https://www.naver.com/";
  const res = await axios.get(url);
  const metaData = await getData(res.data);

  console.log(metaData);
})();
