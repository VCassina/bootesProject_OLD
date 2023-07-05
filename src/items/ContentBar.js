function ContentBar({side}) {
  console.log(side)

  return (
    <>
      {side === "horizontal" && <div className="contentBar-horizontal"></div>}
      {side === "vertical" && <div className="contentBar-vertical"></div>}
      {side !== "horizontal" && side !== "vertical" && console.error('Mauvais type de choix, veillez à renseigner "vertical" ou "horizontal".')}
    </>
  );
}  

export default ContentBar;
