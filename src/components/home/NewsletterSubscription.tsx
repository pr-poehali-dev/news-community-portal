
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

/**
 * Компонент для подписки на новостную рассылку
 */
const NewsletterSubscription: React.FC = () => {
  return (
    <section className="bg-muted/20 py-12 border-y border-border/30">
      <div className="container max-w-screen-lg px-4 mx-auto text-center">
        <div className="flex flex-col items-center">
          <Icon name="Mail" className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-2xl font-playfair font-bold mb-2">
            Подпишитесь на нашу рассылку
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl">
            Получайте самые важные новости и эксклюзивные материалы прямо на
            вашу почту. Никакого спама, только качественный контент.
          </p>
          <div className="flex w-full max-w-md flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex h-10 w-full rounded-md border border-input bg-muted/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            />
            <Button>Подписаться</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
