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
                  let trimTitle = item.title.substring(0,30);
                  return (<li key={idx}><b><i>{source_name}</i></b>: {trimTitle}<a href={item.url} target="_blank" rel="noreferrer" >&nbsp;Link</a></li>);    
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