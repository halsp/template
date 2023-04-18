import { Param } from "@halsp/pipe";
import { Action, HttpGet } from "@halsp/router";
import { BackgroundDto } from "../dtos/background.dto";
import jimp from "jimp";

@HttpGet("^width/^height/^color")
export default class extends Action {
  @Param
  private readonly background!: BackgroundDto;

  async invoke(): Promise<void> {
    if (
      !this.background.color ||
      !this.background.height ||
      !this.background.width
    ) {
      this.notFound();
      return;
    }

    const background = await this.createBackground();
    this.setHeader("content-type", "image/png").ok(background);
  }

  public async createBackground() {
    let color = this.background.color;
    if (!color.startsWith("#")) {
      color = "#" + color;
    }
    if (color.endsWith(".png")) {
      color = color.substring(0, color.length - 4);
    }
    const img = await jimp.create(
      Number(this.background.width),
      Number(this.background.height),
      color
    );
    return await img.getBufferAsync("image/png");
  }
}
