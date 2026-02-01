import classes from './CertificatesLayout.module.scss';

import { CERTIFICATE_CHART } from '../../../_data/dashboard/certificates/certificate-chart.js';
import { OBTAINED_CERTIFICATE } from '../../../_data/dashboard/certificates/obtained-certificate';

import CertificatesList from '../../../features/dashboard/certificate/CertificatesList.jsx';
import SlideItems from '../../../features/slide/SlideItems.jsx';
import BarChart from '../../../components/charts/BarChart.jsx';

export default function CertificatesLayout() {
    return (
        <main className={classes.container}>
            <CertificatesList
                datas={OBTAINED_CERTIFICATE}
                styleLayout={classes.lists}
            />

            <SlideItems styleLayout={classes.slide} />

            <BarChart className={classes.chart} resources={CERTIFICATE_CHART} />
        </main>
    );
}
