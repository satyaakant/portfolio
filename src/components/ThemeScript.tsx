import { resolveTheme, themeIds } from "@/data/themes";

/** Sets <html data-theme> before first paint so there's no flash of the default theme. */
export default function ThemeScript() {
    const code = `(function(){try{
var ids=${JSON.stringify(themeIds)};
var q=new URLSearchParams(location.search).get("theme");
var t=ids.indexOf(q)>-1?q:(${resolveTheme.toString()})(new Date());
document.documentElement.dataset.theme=t;
}catch(e){}})();`;
    return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
