import Vue from 'vue'
<%_ if (options.import === 'full') { _%>
import Vant, { Locale } from 'vant'
import 'vant/lib/index.css'
<%_ if (options.customTheme) { _%>
import '../vant-variables.less'
<%_ } _%>
<%_ if (options.lang !== 'zh-CN') { _%>
import lang from 'vant/lib/locale/lang/<%= options.lang %>'

Vue.use(Vant)
Locale.use('<%= options.lang %>', lang)
<%_ } else { _%>

Vue.use(Vant)
<%_ } _%>
<%_ } else { _%>
import { Button } from 'vant'

<%_ if (options.lang !== 'zh-CN') { _%>
import lang from 'vant/lib/locale/lang/<%= options.lang %>'
import { Locale } from 'vant'

Locale.use('<%= options.lang %>', lang)
<%_ } _%>

Vue.use(Button)
<%_ } _%>

