import { AutoLayout } from "@/components"
import layout from "./layout"
import alternative  from "./alternative"
import mock from "./mock"
import binding from "./binding"

/**
 * 
 * @param {string} avatarUrl 头像 
 * @returns 
 */
export default function Index(props) {
    return (
        <AutoLayout layout={layout} {...props} {...mock}  binding={binding} />
    )
}

