import React from 'react';
import Login from './Login.js';
import Image from 'react-bootstrap/Image';
import Grid from '@material-ui/core/Grid';
import { MdSettingsPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Default = (props) => {
    return (
        <Grid container spacing={3}>
            <Grid item md={4}>
                <Login handler={val => props.handler(val)} />

                <Grid item md={2}>
                        <MdSettingsPhone />
                    </Grid>
                    <Grid item md={10}>
                        0(216) 599 0 777
                    </Grid>
                    <Grid item md={2}>
                        <MdEmail />
                    </Grid>
                    <Grid item md={10}>
                        info@mavimor.com.tr
                    </Grid>
            </Grid>

            <Grid item md={4}>
                <p>
                    Bilgisayar destekli bakım yönetim sistemidir. İngilizce adıyla CMMS (Computerized Maintanence Management Systems)
            <br />
                    Vvino ile makineleri, yapılarda bulunan ekipmanları ve sistemleri kontrol edebilir, çalışmasını takip eder, bakım-onarım süreçlerini, iş emirlerini planlayabilir, iş emri oluşturabilir, ekipmanların satın alımından kurulum, bakım, onarım süreçlerini yönetmebilirsiniz.
                </p>

                <h2>Özellikler</h2>
                <ul>
                    <li>Ekipmanın satın alınma süreciyle tedarik zinciri yönetiminin yapılması</li>
                    <li>Ekipmanın kayıt listesi oluşturularak, ekipmana ait garanti belgelerinin, fatura gibi evrakların sanal olarak arşivlenmesi</li>
                    <li>Vvino ile yapılardaki mekanik odaların 360 derece fotoğraflarının çekilerek, ekipmanların konumlarının bilinmesi ve barkodlanarak tüm süreçlerin takip edilerek arşivlenmesi</li>
                    <li>Ekipmanın bakım planlarının yapılması</li>
                    <li>Ekipmanların yedek parça stok ve kullanım durumlarını takip ederek yedek parça giderlerinin düşürülmesi</li>
                    <li>Ekipmanlara ait toplam işletim maliyetlerini yönetmek yani enerji, personel ve yedek parça ve diğer konulara ait fırsat maliyetlerinin ve risklerin yönetilmesi</li>
                    <li>iş emirleri yaratma, arıza bakım yönetimi ve SLA takibi yapılabilir</li>
                    <li>Arıza kayıt sistemi ile günlük-haftalık-aylık ve yıllık analiz raporları çıkarılması</li>
                    <li>Pc, tablet ve mobil telefon ile 7/24 erişim sağlanabilmesi</li>
                </ul>
            </Grid>


            <Grid item md={4}>
                <Image src="images/mobil_demo.gif" alt="Demo" fluid />
            </Grid>

        </Grid>

    )
}

export default Default
