class web {
  static developer() {
    const nameStyle = 'font-size:1.5em; color:#4558c9;'
    const websiteStyle = 'color:#d61a7f; font-size:1em; text-decoration:none;'
    const { WebDevName, WebSiteDevURL } = window

    const log = str => console.info(str, nameStyle, websiteStyle)

    if (WebDevName && WebSiteDevURL) {
      log(`%c${WebDevName}!\n%c${WebSiteDevURL}`)
    } else if (WebDevName) {
      log(`%c${WebDevName}!`, nameStyle)
    }

    if (!WebDevName)
      log('%cby Gabriel Napoleão!\n%chttps://whoamindx.github.io Δ')
  }
}
