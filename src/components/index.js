import { 
    Input,
    Avatar,
    Space,
    Button,
    Form,
    Select,
    DatePicker,
    Row,
    Col,
    Card,
    Typography,
    Textarea,
    TypographyText,
    TypographyTitle,
    TypographyParagraph,
    FormItem,
    TreeSelect,
    Modal,
    CollapsePanel,
    Collapse,
    Table,
    Alert,
    List,
    ListItem,
    InputGroup,
    ListItemMeta,
    InputPassword,
    notification
} from "ant-design-vue";
import {
    UserOutlined,
    PushpinOutlined,
    SmileOutlined,
    CompassOutlined,
    SettingOutlined,
    PoweroffOutlined,
    HeartOutlined,
    InsertRowAboveOutlined,
    HddOutlined,
    EditOutlined,
    TrophyOutlined,
    CheckCircleOutlined,
    CloseCircleOutlined,
    PlusCircleOutlined,
    PlusOutlined,
    CloseCircleFilled,
    HeartTwoTone,
    MessageOutlined,
    DeleteOutlined,
    PlayCircleOutlined
} from '@ant-design/icons-vue';

import PageBreadCrumb from "../components/OtherComponents/PageBreadCrumb"

const antdComponents = [
    Input,
    Textarea,
    Avatar,
    Card,
    Row,
    Col,
    Space,
    Button,
    Typography,
    Form,
    FormItem,
    Select,
    DatePicker,
    TreeSelect,
    Modal,
    Collapse,
    CollapsePanel,
    Table,
    Alert,
    Image,
    List,
    Avatar,
    InputGroup,
    ListItem,
    ListItemMeta,
    InputPassword,
    notification,
    TypographyText,
    TypographyTitle,
    TypographyParagraph
 ];

const antdIcons = [
    UserOutlined,
    PushpinOutlined,
    SmileOutlined,
    CompassOutlined,
    SettingOutlined,
    PoweroffOutlined,
    CheckCircleOutlined,
    HeartOutlined,
    InsertRowAboveOutlined,
    HddOutlined,
    EditOutlined,
    TrophyOutlined,
    CloseCircleOutlined,
    PlusCircleOutlined,
    PlusOutlined,
    CloseCircleFilled,
    HeartTwoTone,
    MessageOutlined,
    DeleteOutlined,
    PlayCircleOutlined
];

const userComponents = [
    PageBreadCrumb
];

const components = antdComponents.concat(antdIcons).concat(userComponents);

export default components;


