import React from 'react';

export function QueryDetails({query}) {
  const queryDetails = [];

  if(query?.queryName!=='Query11') {
    queryDetails.push(<span className="sub-title">Query Details</span>);
    for (const prop in query) {
      queryDetails.push(
        <li className="query-list" key={prop}>
          {prop}: {query[prop]}
        </li>
      );
    }
  } else {
    return [];
  }

  return queryDetails;
}