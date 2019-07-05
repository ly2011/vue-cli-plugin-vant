import Vue from 'vue'
<%_ if (options.import === 'full') { _%>
import Vant from 'vant'
<%_ if (options.lang !== 'zh-CN') { _%>
import locale from 'vant/lib/locale/<%= options.lang %>'

Vue.use(Vant, { locale })
<%_ } else { _%>

Vue.use(Vant)
<%_ } _%>
<%_ } else { _%>
import { Button } from 'vant'
<%_ if (options.lang !== 'zh-CN') { _%>
import lang from 'vant/lib/locale/<%= options.lang %>'
import { Locale } from 'vant'

Locale.use(`${options.lang}`, lang)
<%_ } _%>

Vue.component('Button', Button)
<%_ } _%>

<%_ if (options.customTheme) { _%>
import '../vant-variables.less'
    <%_ } else { _%>
import 'vant/lib/index.css'
    <%_ } _%>
