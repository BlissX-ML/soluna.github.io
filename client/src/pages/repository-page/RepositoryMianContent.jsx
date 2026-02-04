import { useParams } from 'react-router-dom';

import classes from './RepositoryMianContent.module.scss';
import RenderMainContent from '../../features/render-articles/RenderMainContent';

// import MainContent from "../../features/sidebar-navigation/MainContent";

export default function RepositoryMianContent() {
    const { recapId } = useParams();

    return <RenderMainContent data={null} />;
}
