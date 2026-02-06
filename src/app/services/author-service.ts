import { Injectable } from '@angular/core';
import { Author } from '../models/author.interface';
@Injectable({
  providedIn: 'root',
})
export class AuthorsService {

  getMembers(): Author[]{
    return authors ;
  }
  
}

const authors: Author[] = [
  {
    name: "سالم أحمد",
    role: "مصور محترف",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "محمد علي",
    role: "مصور بورتريه",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "إبراهيم حسن",
    role: "مصور طبيعة",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "داود خالد",
    role: "مدرب تصوير",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "ليث محمود",
    role: "فنان بصري",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "جمال عبدالله",
    role: "مصور ومراجع تقني",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "خالد الفيصل",
    role: "مصور فلكي",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "نادر سعيد",
    role: "مصور شوارع",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "هاني الشمري",
    role: "مصور طعام",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "عمر الراشد",
    role: "مصور حياة برية",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "فارس العلي",
    role: "فنان فوتوغرافي",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "سامي الحربي",
    role: "خبير تعديل صور",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "رامي الخطيب",
    role: "مصور ماكرو",
    image: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "باسم المصري",
    role: "مصور فني",
    image: "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "منصور الزهراني",
    role: "مصور زفاف",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "فيصل الدوسري",
    role: "مصور جوي",
    image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "لؤي الصالح",
    role: "مصور تجاري",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "طارق النعيمي",
    role: "مصور معماري",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "أحمد الشهري",
    role: "مصور رياضي",
    image: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "ماجد القحطاني",
    role: "مصور استوديو",
    image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "ياسر العتيبي",
    role: "مصور رحالة",
    image: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "دحام الحسيني",
    role: "فنان بصري",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "نايف المطيري",
    role: "مصور مواليد",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "عبدالله الغامدي",
    role: "مصور عقارات",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "كريم الفهد",
    role: "خبير تقني",
    image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "سلطان الراجحي",
    role: "فنان تصوير",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "فهد السبيعي",
    role: "مراجع معدات",
    image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "راشد الجاسر",
    role: "فنان بصري",
    image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=100&h=100&fit=crop&crop=face",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  }
];