
function PageLayout({ children }) { // Children es el contenido del interior de este componente, es todo lo q tenemos del principio al final del <>, se lo pasamos al padre
    return (
      <div className="container py-4">{children}</div>
    )
  }
  
export default PageLayout;