const Loading = () => {
    return (
    <div id="divLoading" className="overlay">
      <div className="overlay-content">
        <div id="loadingDiv" className="spinner-grow text-primary" role="status">
          <span className="sr-only">Yükleniyor...</span>
        </div>
      </div>
    </div>
    )
}

export default Loading
