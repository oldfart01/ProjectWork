export function SavedQueries(params) {
  
    function onSavedQueryClick(savedQuery){
      params.onQuerySelect(savedQuery);
    }
  
    function getQueries() {
      return params.savedQueries.map((item, idx) => {
        let trimTitle = item.queryName.substring(0, 30);
        return (<li 
          key={idx} 
          onClick={()=>onSavedQueryClick(item)} 
          className={(item.queryName === params.selectedQueryName)?"selected":""}
        >{trimTitle + ": \"" + item.q + "\""} </li>);
      })
    } 
  
    return (
        <div>
          <ul >{
            (params.savedQueries && params.savedQueries.length > 0)
            ? getQueries()
            : <li>No Saved Queries, Yet!</li>
          }</ul>
        </div>
      )
    
    }
   /* export function SavedQueries({ savedQueries, selectedQueryName, onQuerySelect, currentUser, setSavedQueries }) {
      const [showResetAlert, setShowResetAlert] = useState(false);
    
      const handleResetClick = () => {
        setShowResetAlert(true);
      };
    
      const handleConfirmReset = () => {
        setSavedQueries(newSavedQ); // Assuming setSavedQueries is a function to update the saved queries state
        setShowResetAlert(false);
      };
    
      const handleCancelReset = () => {
        setShowResetAlert(false);
      };
    
      function onSavedQueryClick(savedQuery) {
        onQuerySelect(savedQuery);
      }
    
      function getQueries() {
        return savedQueries.map((item, idx) => {
          let trimTitle = item.queryName.substring(0, 30);
          return (
            <li
              key={idx}
              onClick={() => onSavedQueryClick(item)}
              className={item.queryName === selectedQueryName ? 'selected' : ''}
            >
              {trimTitle + ': "' + item.q + '"'}
            </li>
          );
        });
      }
  
    return (
      <div>
          <button onClick={handleResetClick}>Reset</button>
            {showResetAlert && (
              <div className="alert alert-danger">
                <p>Are you sure you want to erase the list?</p>
                <button onClick={handleConfirmReset}>Confirm</button>
                <button onClick={handleCancelReset}>Cancel</button>
              </div>
            )}
          <ul>{savedQueries && savedQueries.length > 0 ? getQueries() : <li>No Saved Queries, Yet!</li>}</ul>
      </div>
    );
    }*/