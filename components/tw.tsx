import React, { ComponentProps } from "react";

interface ExoticComponentWithDisplayName<P = unknown>
  extends React.ExoticComponent<P> {
  defaultProps?: Partial<P>;
  displayName?: string;
}

export type AnyComponent<P = any> =
  | ExoticComponentWithDisplayName<P>
  | React.ComponentType<P>;

export type KnownTarget = keyof JSX.IntrinsicElements | AnyComponent;

const tw = (Tag: KnownTarget) => (twClasses: TemplateStringsArray) => {
  const NewComponent = ({
    children,
    ...props
  }: ComponentProps<KnownTarget>) => {
    let cssClasses = twClasses.toString();

    if (props.className !== undefined) {
      cssClasses += " " + props.className;
    }

    if (!twClasses) {
      return <Tag {...props}>{children}</Tag>;
    } else {
      return (
        <Tag {...props} className={cssClasses}>
          {children}
        </Tag>
      );
    }
  };
  return NewComponent;
};

tw.a = tw("a");
tw.abbr = tw("abbr");
tw.address = tw("address");
tw.area = tw("area");
tw.article = tw("article");
tw.aside = tw("aside");
tw.audio = tw("audio");
tw.b = tw("b");
tw.base = tw("base");
tw.bdi = tw("bdi");
tw.bdo = tw("bdo");
tw.big = tw("big");
tw.blockquote = tw("blockquote");
tw.body = tw("body");
tw.br = tw("br");
tw.button = tw("button");
tw.canvas = tw("canvas");
tw.caption = tw("caption");
tw.cite = tw("cite");
tw.code = tw("code");
tw.col = tw("col");
tw.colgroup = tw("colgroup");
tw.data = tw("data");
tw.datalist = tw("datalist");
tw.dd = tw("dd");
tw.del = tw("del");
tw.details = tw("details");
tw.dfn = tw("dfn");
tw.dialog = tw("dialog");
tw.div = tw("div");
tw.dl = tw("dl");
tw.dt = tw("dt");
tw.em = tw("em");
tw.embed = tw("embed");
tw.fieldset = tw("fieldset");
tw.figcaption = tw("figcaption");
tw.figure = tw("figure");
tw.footer = tw("footer");
tw.form = tw("form");
tw.h1 = tw("h1");
tw.h2 = tw("h2");
tw.h3 = tw("h3");
tw.h4 = tw("h4");
tw.h5 = tw("h5");
tw.h6 = tw("h6");
tw.head = tw("head");
tw.header = tw("header");
tw.hgroup = tw("hgroup");
tw.hr = tw("hr");
tw.html = tw("html");
tw.i = tw("i");
tw.iframe = tw("iframe");
tw.img = tw("img");
tw.input = tw("input");
tw.ins = tw("ins");
tw.kbd = tw("kbd");
tw.keygen = tw("keygen");
tw.label = tw("label");
tw.legend = tw("legend");
tw.li = tw("li");
tw.link = tw("link");
tw.main = tw("main");
tw.map = tw("map");
tw.mark = tw("mark");
tw.menu = tw("menu");
tw.menuitem = tw("menuitem");
tw.meta = tw("meta");
tw.meter = tw("meter");
tw.nav = tw("nav");
tw.noindex = tw("noindex");
tw.noscript = tw("noscript");
tw.object = tw("object");
tw.ol = tw("ol");
tw.optgroup = tw("optgroup");
tw.option = tw("option");
tw.output = tw("output");
tw.p = tw("p");
tw.param = tw("param");
tw.picture = tw("picture");
tw.pre = tw("pre");
tw.progress = tw("progress");
tw.q = tw("q");
tw.rp = tw("rp");
tw.rt = tw("rt");
tw.ruby = tw("ruby");
tw.s = tw("s");
tw.samp = tw("samp");
tw.slot = tw("slot");
tw.script = tw("script");
tw.section = tw("section");
tw.select = tw("select");
tw.small = tw("small");
tw.source = tw("source");
tw.span = tw("span");
tw.strong = tw("strong");
tw.style = tw("style");
tw.sub = tw("sub");
tw.summary = tw("summary");
tw.sup = tw("sup");
tw.table = tw("table");
tw.template = tw("template");
tw.tbody = tw("tbody");
tw.td = tw("td");
tw.textarea = tw("textarea");
tw.tfoot = tw("tfoot");
tw.th = tw("th");
tw.thead = tw("thead");
tw.time = tw("time");
tw.title = tw("title");
tw.tr = tw("tr");
tw.track = tw("track");
tw.u = tw("u");
tw.ul = tw("ul");
tw.var = tw("var");
tw.video = tw("video");
tw.wbr = tw("wbr");
tw.webview = tw("webview");
tw.svg = tw("svg");
tw.animate = tw("animate");
tw.animateMotion = tw("animateMotion");
tw.animateTransform = tw("animateTransform");
tw.circle = tw("circle");
tw.clipPath = tw("clipPath");
tw.defs = tw("defs");
tw.desc = tw("desc");
tw.ellipse = tw("ellipse");
tw.feBlend = tw("feBlend");
tw.feColorMatrix = tw("feColorMatrix");
tw.feComponentTransfer = tw("feComponentTransfer");
tw.feComposite = tw("feComposite");
tw.feConvolveMatrix = tw("feConvolveMatrix");
tw.feDiffuseLighting = tw("feDiffuseLighting");
tw.feDisplacementMap = tw("feDisplacementMap");
tw.feDistantLight = tw("feDistantLight");
tw.feDropShadow = tw("feDropShadow");
tw.feFlood = tw("feFlood");
tw.feFuncA = tw("feFuncA");
tw.feFuncB = tw("feFuncB");
tw.feFuncG = tw("feFuncG");
tw.feFuncR = tw("feFuncR");
tw.feGaussianBlur = tw("feGaussianBlur");
tw.feImage = tw("feImage");
tw.feMerge = tw("feMerge");
tw.feMergeNode = tw("feMergeNode");
tw.feMorphology = tw("feMorphology");
tw.feOffset = tw("feOffset");
tw.fePointLight = tw("fePointLight");
tw.feSpecularLighting = tw("feSpecularLighting");
tw.feSpotLight = tw("feSpotLight");
tw.feTile = tw("feTile");
tw.feTurbulence = tw("feTurbulence");
tw.filter = tw("filter");
tw.foreignObject = tw("foreignObject");
tw.g = tw("g");
tw.image = tw("image");
tw.line = tw("line");
tw.linearGradient = tw("linearGradient");
tw.marker = tw("marker");
tw.mask = tw("mask");
tw.metadata = tw("metadata");
tw.mpath = tw("mpath");
tw.path = tw("path");
tw.pattern = tw("pattern");
tw.polygon = tw("polygon");
tw.polyline = tw("polyline");
tw.radialGradient = tw("radialGradient");
tw.rect = tw("rect");
tw.stop = tw("stop");
tw.switch = tw("switch");
tw.symbol = tw("symbol");
tw.text = tw("text");
tw.textPath = tw("textPath");
tw.tspan = tw("tspan");
tw.use = tw("use");
tw.view = tw("view");

export default tw;
