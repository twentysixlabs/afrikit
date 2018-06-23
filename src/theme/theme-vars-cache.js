// @flow
import theme from './theme';
import { gridConfig as bp } from '../base';

export const THEME_CONF = theme;

const configCache = [];
const makeCacheId = props => JSON.stringify(props.theme || {});

const resolveConfig = props => {
  const themeConf = props.theme || {};

  const conf = {
    ...THEME_CONF,
    ...themeConf,
    bp,
  };

  return conf;
};

export default function themeVars(props) {
  const cacheId = makeCacheId(props);

  if (configCache[0] === cacheId) {
    return configCache[1];
  }

  const conf = resolveConfig(props);

  configCache[0] = cacheId;
  configCache[1] = conf;

  return conf;
}

const themeConfigCache = [];
const themeMakeCacheId = themeFromProvider =>
  JSON.stringify(themeFromProvider || {});
const themeResolveConfig = themeFromProvider => {
  const themeConf = themeFromProvider || {};

  const conf = {
    ...THEME_CONF,
    ...themeConf,
    bp,
  };

  return conf;
};
export const extractThemeOrDefault = themeFromProvider => {
  // if (!themeFromProvider) return THEME_CONF;
  // return { ...THEME_CONF, ...themeFromProvider };

  let cacheId;
  if (themeConfigCache.length === 0) {
    cacheId = themeMakeCacheId(themeFromProvider);
  }

  if (themeConfigCache[0] === cacheId) {
    return themeConfigCache[1];
  }

  const conf = themeResolveConfig(themeFromProvider);

  themeConfigCache[0] = cacheId;
  themeConfigCache[1] = conf;

  return conf;
};
