import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import SimpleCell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import persik from '../img/persik.png';
import first from '../img/first.png';
import second from '../img/second.png';
import third from '../img/third.png';
import './Persik.css';

const osName = platform();

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Notifications
		</PanelHeader>
	      <SimpleCell before={<Avatar size={48} src={second} />} description="Добавила голосовую запись к месту Starbucks">Лиза Смирнова</SimpleCell>
          <SimpleCell before={<Avatar size={48} src={first} />} description="Добавил фотографию к месту Craft Brothers">Игорь Лыков</SimpleCell>
          <SimpleCell before={<Avatar size={48} src={persik} />} description="К месту добавлена новая запись">Шоколад</SimpleCell>
          <SimpleCell before={<Avatar size={48} src={third} />} description="Прокомментировал вашу запись">Никита Шилов</SimpleCell>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;