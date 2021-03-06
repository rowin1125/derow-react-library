import {
  FaPhone,
  FaMailBulk,
  FaWhatsapp,
  FaRegCalendarAlt,
  FaBookOpen,
  FaCartPlus,
  FaIdBadge,
  FaRocket,
  FaServer,
  FaQuestion,
  FaPhotoVideo,
  FaCamera,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaPinterestP,
  FaRegLightbulb,
  FaTools,
} from 'react-icons/fa';
import { IoIosStats, IoIosCube, IoIosApps } from 'react-icons/io';
import { MdHearing, MdNetworkCheck, MdRateReview } from 'react-icons/md';
import { FiEdit3 } from 'react-icons/fi';
import { GoPerson, GoFlame, GoGraph } from 'react-icons/go';
import { GiLaurelCrown } from 'react-icons/gi';

import { BsFillChatSquareDotsFill } from 'react-icons/bs';
import { AiOutlineFileSearch, AiOutlineGoogle } from 'react-icons/ai';
import { VscFileSubmodule } from 'react-icons/vsc';
import { CgData } from 'react-icons/cg';

export const iconGenerator = icon => {
  let newIcon;
  switch (icon) {
    case 'onderhoud':
      newIcon = FaTools;
      break;
    case 'google':
      newIcon = AiOutlineGoogle;
      break;
    case 'crown':
      newIcon = GiLaurelCrown;
      break;
    case 'personal':
      newIcon = GoPerson;
      break;
    case 'fire':
      newIcon = GoFlame;
      break;
    case 'graph':
      newIcon = GoGraph;
      break;
    case 'lightbulb':
      newIcon = FaRegLightbulb;
      break;
    case 'stack':
      newIcon = IoIosApps;
      break;
    case 'review':
      newIcon = MdRateReview;
      break;
    case 'cube':
      newIcon = IoIosCube;
      break;
    case 'speedtest':
      newIcon = MdNetworkCheck;
      break;
    case 'hearing':
      newIcon = MdHearing;
      break;
    case 'edit':
      newIcon = FiEdit3;
      break;
    case 'telefoon':
      newIcon = FaPhone;
      break;
    case 'mail':
      newIcon = FaMailBulk;
      break;
    case 'whatsapp':
      newIcon = FaWhatsapp;
      break;
    case 'agenda':
      newIcon = FaRegCalendarAlt;
      break;
    case 'chat':
      newIcon = BsFillChatSquareDotsFill;
      break;
    case 'boek':
      newIcon = FaBookOpen;
      break;
    case 'winkelmand':
      newIcon = FaCartPlus;
      break;
    case 'profiel':
      newIcon = FaIdBadge;
      break;
    case 'stats':
      newIcon = IoIosStats;
      break;
    case 'raket':
      newIcon = FaRocket;
      break;
    case 'server':
      newIcon = FaServer;
      break;
    case 'foto/video':
      newIcon = FaPhotoVideo;
      break;
    case 'camera':
      newIcon = FaCamera;
      break;
    case 'data':
      newIcon = CgData;
      break;
    case 'file/search':
      newIcon = AiOutlineFileSearch;
      break;
    case 'files':
      newIcon = VscFileSubmodule;
      break;
    case 'facebook':
      newIcon = FaFacebookF;
      break;
    case 'instagram':
      newIcon = FaInstagram;
      break;
    case 'twitter':
      newIcon = FaTwitter;
      break;
    case 'linkedin':
      newIcon = FaLinkedinIn;
      break;
    case 'github':
      newIcon = FaGithub;
      break;
    case 'pinterest':
      newIcon = FaPinterestP;
      break;

    default:
      newIcon = FaQuestion;
      break;
  }
  return newIcon;
};
