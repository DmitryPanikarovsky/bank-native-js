import { BaseScreen } from '@/core/component/base-screen.component'
import renderService from '@/core/services/render.service'
import template from './home.template.html'
import styles from './home.module.scss'
import { $R } from '@/core/rquery/rquery.lib';
import { UserItem } from '@/components/ui/user-item/user-item.component'

export class Home extends BaseScreen {
    constructor() {
        super({ title: 'Home' })
    }

    render() {
        const element = renderService.htmlToElement(
            template,
            [
                new UserItem({
                    avatarPath: 'data:image/png;base64,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',
                    name: 'DiMax'
                })
            ],
            styles
        )

        $R(element).find('h1').css('color', 'green')

        return element
    }
}

