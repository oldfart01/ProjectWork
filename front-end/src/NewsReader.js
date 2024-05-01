
import { QueryForm } from './QueryForm';
import { Articles } from './Articles';
import { SavedQueries } from './SavedQueries'; 
import { useState, useEffect } from 'react';
import { exampleQuery ,exampleData } from './data';

export function NewsReader() {
  const [query, setQuery] = useState(exampleQuery); // latest query sent to newsapi
  const [data, setData] = useState(exampleData);   // current data returned from newsapi
  const [queryFormObject, setQueryFormObject] = useState({ ...exampleQuery });
   const [savedQueries, setSavedQueries] = useState([{ ...exampleQuery }]);
  const urlNews = "/news"; // API endpoint for news data

  useEffect(() => {
    getNews(query);
  }, [query]);
  
  function onSavedQuerySelect(selectedQuery) {
    setQueryFormObject(selectedQuery);
    setQuery(selectedQuery);
   }

  function onFormSubmit(queryObject) {
    let newSavedQueries = [];
    newSavedQueries.push(queryObject);
    for (let savedQuery of savedQueries) {
      if (savedQuery.queryName !== queryObject.queryName) {
        newSavedQueries.push(savedQuery);
      }
    }
    console.log(JSON.stringify(newSavedQueries));
    setSavedQueries(newSavedQueries);
    setQuery(queryObject);
  }

  async function getNews(queryObject) {
    if (!queryObject.q || queryObject.q.trim() === '') {
      setData({});
    } else {
      try {
        const response = await fetch(urlNews, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(queryObject)
        });

        if (!response.ok) {
          throw new Error('Failed to fetch news data');
        }

        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Error fetching news:', error);
        setData({});
      }
    }
  }

  //function onFormSubmit(queryObject) {
   // setQuery(queryObject);
  //}
  return (
<div>
      <div>
        <section className="parent">
          <div className="box">
            <span className='title'>Query Form</span>
            <QueryForm
              setFormObject={setQueryFormObject}
              formObject={queryFormObject}
              submitToParent={onFormSubmit} />
          </div>
          <div className="box">
            <span className='title'>Saved Queries</span>
            <SavedQueries savedQueries={savedQueries} 
            selectedQueryName={query.queryName}
            onQuerySelect={onSavedQuerySelect} />
          </div>
          <div className="box">
            <span className='title'>Articles List</span>
            <Articles query={query} data={data} />
          </div>
        </section>
      </div>
    </div>
  );
}
