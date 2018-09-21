import Icon from '@material-ui/core/Icon'
import * as React from 'react'

interface MaterialIconProps {
    iconName: string,
    color?: 'inherit' | 'primary' | 'secondary' | 'action' | 'error' | 'disabled',
    fontSize?: 'inherit' | 'default',
    classes?: object,
    style?: object,
}
/**
 * Material Icon component
 */
export class MaterialIcon extends React.Component<MaterialIconProps, {}> {
    /**
     * renders the component
     */
    public render() {
        const { color, fontSize, classes, iconName, style } = this.props
        return <Icon
            color={color ? color : 'primary'}
            fontSize={fontSize ? fontSize : 'default'}
            classes={classes ? classes : null}
            style={style ? style : null}
        >{iconName}</Icon>
    }
}
