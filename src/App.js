import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Feed from "./Feed";

function App() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_LOCAL);
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log({ articles });
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="h-[75vh]">
      <div className="text-center font-bold my-2">
        <h2>RSS - Feed</h2>
        <h1 className="text-2xl">Hello, Vance</h1>
      </div>
      <div className="p-5 border mx-auto rounded-xl w-3/4 max-w-lg overflow-y-auto h-[55vh]">
        <div className="bg-black flex items-center rounded-lg py-2 px-6 mb-5 justify-center">
          <img
            src="https://s3-alpha.figma.com/hub/file/2819778229/38e9515b-56a7-42fe-8259-1e512bf41bbd-cover.png"
            className="object-cover w-10"
          />
          <h1 className="text-white text-2xl font-bold">
            THE NEXTFLIX TECH BLOG
          </h1>
        </div>
        {articles.map((item, i) => (
          <Feed
            key={`${item}-${i}`}
            title={item.item.title}
            link={item.item.link}
            date={item.item.pubDate}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
