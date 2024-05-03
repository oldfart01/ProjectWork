import React from 'react';

export function QueryDetails({query}) {
  const queryDetails = [];

  console.log(query);
  console.log(query!==null);
  console.log(query.queryName!=='Query11');
  console.log(query!==null || query.queryName!=='Query11');
  if(query?.queryName!=='Query11') {
    console.log("IN IF");
    queryDetails.push(<span className="sub-title">Query Details</span>);
    for (const prop in query) {
      queryDetails.push(
        <li className="query-list" key={prop}>
          {prop}: {query[prop]}
        </li>
      );
    }
  } else {
    console.log("IN ELSE");
    return [];
  }

  return queryDetails;
}