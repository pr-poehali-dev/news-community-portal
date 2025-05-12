import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export interface NewsCardProps {
  id: string;
  title: string;
  summary: string;
  category: string;
  imageUrl: string;
  publishedAt: string;
  author: string;
  commentsCount: number;
  likes: number;
  featured?: boolean;
}

const NewsCard = ({
  id,
  title,
  summary,
  category,
  imageUrl,
  publishedAt,
  author,
  commentsCount,
  likes,
  featured = false,
}: NewsCardProps) => {
  return (
    <Card
      className={`overflow-hidden transition-all hover:shadow-lg animate-fade-in hover:border-primary/50 ${
        featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
      }`}
    >
      <Link to={`/news/${id}`} className="block h-full">
        <div className={`${featured ? "md:order-2" : ""}`}>
          <div className="aspect-video relative overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full transition-transform hover:scale-105"
            />
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
              {category}
            </Badge>
          </div>
        </div>

        <div className="flex flex-col h-full">
          <CardHeader className="p-4 pb-2">
            <div className="flex items-center text-xs text-muted-foreground mb-2">
              <span>{publishedAt}</span>
              <span className="mx-2">•</span>
              <span>{author}</span>
            </div>
            <h3 className="font-playfair text-lg md:text-xl font-bold leading-tight text-foreground">
              {title}
            </h3>
          </CardHeader>

          <CardContent className="p-4 pt-0 flex-grow">
            <p className="text-muted-foreground line-clamp-3">{summary}</p>
          </CardContent>

          <CardFooter className="p-4 pt-0 border-t border-border/30">
            <div className="flex items-center text-sm text-muted-foreground">
              <div className="flex items-center mr-4">
                <Icon name="MessageSquare" className="mr-1 h-4 w-4" />
                <span>{commentsCount}</span>
              </div>
              <div className="flex items-center">
                <Icon name="Heart" className="mr-1 h-4 w-4" />
                <span>{likes}</span>
              </div>
              <div className="ml-auto">
                <Icon name="ArrowRight" className="h-4 w-4 text-primary" />
              </div>
            </div>
          </CardFooter>
        </div>
      </Link>
    </Card>
  );
};

export default NewsCard;
