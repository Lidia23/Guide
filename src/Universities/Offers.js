import './Offer.css';
import { useNavigate } from 'react-router-dom';

export default function Offer({projectlist}) {
    const navigate = useNavigate();
    return (
        <ul>
            <li><a href={`projectlist/${projectlist}`}><i class="bi bi-arrow-right-short"></i>programs</a></li>
            <li><a href=""><i class="bi bi-arrow-right-short"></i>scholarship</a></li>
            <li><a href=""><i class="bi bi-arrow-right-short"></i>dormitories</a></li>
            <li><a href=""><i class="bi bi-arrow-right-short"></i>clubs</a></li>
        </ul>
    )
}