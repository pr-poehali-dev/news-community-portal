import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="container max-w-screen-xl py-8 px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2 font-playfair text-xl font-bold mb-4"
            >
              <Icon name="Globe" className="h-6 w-6 text-primary" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                NexusNet
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Оставайтесь в курсе последних событий с нашим информационным
              порталом. Актуальные новости, комментарии экспертов и аналитика.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Facebook" className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Twitter" className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Instagram" className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Telegram" className="h-5 w-5" />
                <span className="sr-only">Telegram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">Разделы</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/politics"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Политика
                </Link>
              </li>
              <li>
                <Link
                  to="/business"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Бизнес
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Технологии
                </Link>
              </li>
              <li>
                <Link
                  to="/science"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Наука
                </Link>
              </li>
              <li>
                <Link
                  to="/culture"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Культура
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">Сервисы</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/submit-news"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Предложить новость
                </Link>
              </li>
              <li>
                <Link
                  to="/newsletter"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Подписка на рассылку
                </Link>
              </li>
              <li>
                <Link
                  to="/comments"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Комментарии
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Личный кабинет
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">О нас</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  О проекте
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Наша команда
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Пользовательское соглашение
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NexusNet. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
