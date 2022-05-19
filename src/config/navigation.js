import { Icon } from "semantic-ui-react";
import { DASHBOARD, NEWSFEED, NOTIFICATIONS, USERMANAGEMENT } from "../routes";

export const navigations = [
    {
        id:1,
        title:"Dashboard",
        name:'dashboard',
        path:DASHBOARD,
        icon:<Icon name="dashboard"/>
    },
    {
        id:2,
        title:"User Management",
        name:"user-management",
        path:USERMANAGEMENT,
        icon:<Icon name="dashboard"/>
    },
    {
        id:4,
        title:"Newsfeed",
        name:"newsfeed",
        path:NEWSFEED,
        icon:<Icon name="dashboard"/>
    },
    {
        id:3,
        title:"Notifications",
        name:"notifications",
        path:NOTIFICATIONS,
        icon:<Icon name="dashboard"/>
    }
]