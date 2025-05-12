
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="flex items-center gap-2 mr-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 font-playfair text-2xl font-bold text-primary"
          >
            <Icon name="Newspaper" className="h-8 w-8" />
            <span>НовостиОнлайн</span>
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 items-center gap-6 text-sm">
          <Link to="/" className="font-medium transition-colors hover:text-primary">
            Главная
          </Link>
          <Link to="/politics" className="font-medium transition-colors hover:text-primary">
            Политика
          </Link>
          <Link to="/business" className="font-medium transition-colors hover:text-primary">
            Бизнес
          </Link>
          <Link to="/technology" className="font-medium transition-colors hover:text-primary">
            Технологии
          </Link>
          <Link to="/culture" className="font-medium transition-colors hover:text-primary">
            Культура
          </Link>
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          <div className="relative w-full md:w-auto md:flex-1 max-w-sm">
            <Input 
              type="search" 
              placeholder="Поиск новостей..." 
              className="w-full md:w-[240px] pl-9"
            />
            <Icon 
              name="Search" 
              className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" 
            />
          </div>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Icon name="Bell" className="h-5 w-5" />
            <span className="sr-only">Уведомления</span>
          </Button>
          <Button variant="outline" className="hidden md:flex">
            Войти
          </Button>
          <Button className="hidden md:flex">
            <Icon name="PenLine" className="mr-2 h-4 w-4" />
            Предложить новость
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" className="h-5 w-5" />
            <span className="sr-only">Меню</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
