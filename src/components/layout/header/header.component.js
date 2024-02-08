import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './header.module.scss'
import template from './header.template.html'
import { LogoutButton } from './logout-button/logout-button.component'
import { Search } from './search/search.component'
import { UserItem } from '@/components/ui/user-item/user-item.component'
import { Logo } from './logo/logo.component'

export class Header extends ChildComponent {
    constructor({ router }) {
        super()

        this.router = router
    }
    render() {
        this.element = renderService.htmlToElement(
                template, 
                [
                    Logo,
                    new LogoutButton({
                        router: this.router
                    }),
                    Search,
                    new UserItem({
                        avatarPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwam8jBOGdyypJqjzDB7gRlCIP8ysA9enmK5wqtlHoV3wdXFRK51A7TFDvTJrU1yaputU&usqp=CAU',
                        name: 'DiMax'
                    })

                ], 
                styles
            )

        return this.element
    }
}
