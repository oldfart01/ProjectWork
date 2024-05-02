export function Articles(params) {
    let articles = (params.data.articles)?params.data.articles:[];
    return (
      <div className='scroll-container'>
        <ol >{
            articles.map((item, idx) => {
              if(item){
                let source_name = item.source?item.source.name?item.source.name:"":"";

                if(item.title){
                  if(item.title === "[Removed]"){
                    return (<li key={idx} >Was Removed</li>);
                  }
                  let trimTitle = item.title.substring(0,60);
                  return (<li key={idx}><b> {trimTitle}</b>:<a href={item.url} target="_blank" rel="noreferrer" >&nbsp;<i>{source_name}</i></a></li>);    
                }else{
                  return (<li key={idx}>No Title</li>);
                }
              }else{
                return (<li key={1} >No Item</li>);
              }
            })
        }</ol>
      </div>
    )
  
  }