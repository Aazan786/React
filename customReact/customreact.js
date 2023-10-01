function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.typeof)
    // domElement.innerHTML = reactElement.childern
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    
    // container.append(domElement)

    const domElement = document.createElement(reactElement.typeof)
    domElement.innerHTML = reactElement.childern
    for (const prop in reactElement.props) {
      if (prop == 'childern') continue;
        domElement.setAttribute(prop, reactElement.props [prop])
    }
     container.append(domElement)
}

const reactElement = {
    typeof: 'a',
    props: {
        href: 'https//google.com',
        target: '_blank'
    },
    childern: "click to visit google"
    
}

const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)