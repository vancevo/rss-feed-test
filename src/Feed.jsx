const Feed = ({ title, link, date }) => {
  return (
    <>
      <div className="space-y-1 border p-2">
        <a href={link} target="_blank" >
          <h3 className="hover:text-neutral-600 cursor-pointer text-sky-900 font-bold">{title}</h3>
        </a>
        <p className="text-sm text-neutral-500">{date}</p>
      </div>
    </>
  );
};

export default Feed;
