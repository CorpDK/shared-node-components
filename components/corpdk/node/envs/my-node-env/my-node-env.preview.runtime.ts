import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react'; // the node env uses the react env's preview feature
// uncomment the line below and install the theme if you want to use our theme or create your own and import it here
// import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

import { MyNodeEnvAspect } from './my-node-env.aspect';

export class MyNodeEnvPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const myNodeEnvPreviewMain = new MyNodeEnvPreviewMain();
    // uncomment the line below to register a new provider to wrap all compositions using this environment with a custom theme.
    // react.registerProvider([ThemeCompositions]);

    return myNodeEnvPreviewMain;
  }
}

MyNodeEnvAspect.addRuntime(MyNodeEnvPreviewMain);