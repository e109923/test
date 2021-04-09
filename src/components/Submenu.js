import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ApartmentIcon from '@material-ui/icons/Apartment';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListItem from '@material-ui/core/ListItem';
import ListItemLink from './ListItemLink.js';
import axios from 'axios';
import { API_BASE_URL } from '../constants/apiConstants';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

export default class CustomizedMenus extends Component {
  constructor(props) {
    super(props)

    let icon;
    switch (props.tur) {
      case "Bağlantı":
        icon = <ApartmentIcon />;
        break;
      case "İş Liste":
        icon = <AssignmentIcon />;
        break;
      default:
        break;
    }

    this.state = {
      icon: icon,
      anchorEl: null,
      liste: null,
    }
  }

  componentDidMount() {
    let liste = [];

    switch (this.props.tur) {
      case "Bağlantı":
        const payload = {
          "token": localStorage.getItem("EYS_TOKEN"),
          "personelId": localStorage.getItem("EYS_PERSONELID"),
          "organizasyonId": localStorage.getItem("EYS_ORGANIZASYONID"),
          "istek": {
            "id": true,
            "isim": true,
            "durum": false,
            "isSayisi": true,
            "organizasyonId": false,
            "organizasyon": true
          }
        }

        axios.post(API_BASE_URL + 'baglanti/liste', payload)
          .then((response) => {
            liste = response.data.map((baglanti) => (
              <ListItemLink key={baglanti.id} to={"/baglanti/" + baglanti.id} primary={baglanti.isim} icon={<KeyboardArrowRightIcon fontSize="small" />} />
            ));

            this.setState({ secenekler: liste });
          });

        break;
      case "İş Liste":
        let i;
        for (i = 1; i <= 7; i++) {

          let propsTo;
          let propsPrimary;

          switch (i) {
            case 1:
              propsTo = "/isliste/" + i;
              propsPrimary = "Onay Bekleyen İşler";
              break;
            case 2:
              propsTo = "/isliste/" + i;
              propsPrimary = "Üstlenilmemiş İşler";
              break;
            case 3:
              propsTo = "/isliste/" + i;
              propsPrimary = "Oluşturduğum İşler";
              break;
            case 4:
              propsTo = "/isliste/" + i;
              propsPrimary = "İş Talepleri";
              break;
            case 5:
              propsTo = "/isfiltre";
              propsPrimary = "İş Filtresi";
              break;
            case 6:
              propsTo = "/isliste";
              propsPrimary = "Kontrol Listeleri";
              break;
            case 7:
              propsTo = "/isliste";
              propsPrimary = "Planlama Listesi";
              break;
            default:
          }

          liste = liste.concat(<ListItemLink key={i} to={propsTo} primary={propsPrimary} icon={<KeyboardArrowRightIcon fontSize="small" />} />);
        }

        this.setState({ secenekler: liste });

        break;
      default:
        break;
    }
  }


  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    return (
      <div>
        <ListItem button key={this.props.tur} onClick={this.handleClick} aria-controls="customized-menu" aria-haspopup="true">
          <ListItemIcon>{this.state.icon}</ListItemIcon>
          <ListItemText primary={this.props.tur} />
        </ListItem>

        {this.state.secenekler !== null &&
          <StyledMenu
            id="customized-menu"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
          >
            {this.state.secenekler}
          </StyledMenu>
        }
      </div>
    );
  }
}