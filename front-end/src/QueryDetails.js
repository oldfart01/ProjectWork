import React from 'react';

export function QueryDetails({query}) {
      const queryDetails = [];

      queryDetails.push(<span className="sub-title">Query Details</span>);
      for (const prop in query) {
        queryDetails.push(
          <li className="query-list" key={prop}>
            {prop}: {query[prop]}
          </li>
        );
      }

    return queryDetails;
}