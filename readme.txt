
- For Using Sass
    - % sudo npm install -g sass
    - Use File Watchers in Webstorm
        ◦ Install SASS plugin in Webstorm in preferences/Plugins
        ◦ Preferences / Tools / File Watchers
            ‣ Make SCSS checked
            ‣ Double click SCSS to change settings (leave default)

                Arguments : $FileName$:./css/$FileNameWithoutExtension$.module.css
                Output Paths : ./css/$FileNameWithoutExtension$.module.css:./css/$FileNameWithoutExtension$.css.module.map

	- Make sure to uncheck “Track only root files”

    - For using :
        - import classes from './css/Button.module.css';
        <p className={classes.btn}>Deneme</p>

