import { useEffect } from 'preact/hooks';

import css from './App.module.less';

const App = (props: any) => {
	useEffect(() => {
		console.log('app mounted');
	}, []);
	return <div className={css.app}>hello world</div>;
};

App.displayName = 'App';

export default App;
export { App };
