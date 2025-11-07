import {
    FaDiscord,
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTiktok,
    FaYoutube,
} from 'react-icons/fa';

export const LINKS = [
    { name: 'Email', link: 'mailto:codec@ensta.edu.dz', icon: FaEnvelope },
    { name: 'GitHub', link: 'https://github.com/', icon: FaGithub },
    { name: 'Instagram', link: 'https://www.instagram.com/codec.ensta/', icon: FaInstagram },
    { name: 'TikTok', link: 'https://tiktok.com/@gdsc_ensta', icon: FaTiktok },
    { name: 'Facebook', link: 'https://web.facebook.com/profile.php?id=61583310892444#', icon: FaFacebook },
    { name: 'Discord', link: 'https://discord.gg/3ryMfNBHTE', icon: FaDiscord },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/company/compsci-adl/', icon: FaLinkedin },
    { name: 'YouTube', link: 'https://www.youtube.com/', icon: FaYoutube },
] as const;
