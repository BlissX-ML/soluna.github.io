import classes from './CertificatesLayout.module.scss';

import { CERTIFICATE_CHART } from '../../../_data/dashboard/certificates/certificate-chart.js';
import { OBTAINED_CERTIFICATE } from '../../../_data/dashboard/certificates/obtained-certificate';

import CertificatesList from '../../../features/dashboard/CertificatesList.jsx';
import SlideItems from '../../../features/slide/SlideItems.jsx';
import BarChart from '../../../components/charts/BarChart.jsx';

export default function CertificatesLayout() {
    return (
        <main className={classes.container}>
            <CertificatesList datas={OBTAINED_CERTIFICATE} />

            <SlideItems />

            <BarChart className={classes.chart} resources={CERTIFICATE_CHART} />
        </main>
    );
}
