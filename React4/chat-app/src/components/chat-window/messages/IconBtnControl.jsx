import React from 'react';
import { Icon, Tooltip, Whisper, Badge, IconButton } from 'rsuite';

function ConditionalBadge ({condition, Children}) {
    return condition ? <Badge content={condition}>{Children}</Badge> : Children;
}

function IconBtnControl({
    isVisible,
    iconName,
    tooltip,
    onclick,
    badgeContent,
    ...props
}) { 
    return (
        <div className='ml-2' style={{visibility: isVisible ? 'visible' : 'hidden'}}>

            <ConditionalBadge condition={badgeContent} >
                <Whisper

                  placement="top"

                  delay={0}
                  delayHide={0}
                  delayShow={0}
                  trigger="hover"
                  speaker={<Tooltip>{tooltip}</Tooltip>}
                >
                    <IconButton
                    {...props}
                    onclick={onclick}
                    circle
                    size="xs"
                    icon={<Icon icon={iconName} />}
                    />
                </Whisper>

            </ConditionalBadge>
        </div>
    )
}

export default IconBtnControl;