function sideMoveTankControl(degree)
{
	tankPositionT = $('#computerTank').position();
	posTankPosHitT_x = tankPositionT.left;
	posTankPosHitT_y = tankPositionT.top;
	switch(degree)
	{
		case 0:
		case 360:
			sum_x = posTank_x - speedTank;
			sum_y = 0;
			if(sum_x > 0){
				if((sum_x >= posTankPosHitT_x) && (sum_x <= (posTankPosHitT_x + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y += (0);
				}
			}
			break;
		case 5:
		case -355:
			sum_x = posTank_x - speedTank;
			sum_y = posTank_y - (speedTank - 3);
			if((sum_x > 0) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y -= ((speedTank - 3));
				}
			}
			break;
		case 10:
		case -350:
			sum_x = posTank_x - speedTank;
			sum_y = posTank_y - (speedTank - 3);
			if((sum_x > 0) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y -= ((speedTank - 3));
				}
			}
			break;
		case 15:
		case -345:
			sum_x = posTank_x - speedTank;
			sum_y = posTank_y - (speedTank - 2);
			if((sum_x > 0) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y -= ((speedTank - 2));
				}
			}
			break;
		case 20:
		case -340:
			sum_x = posTank_x - speedTank;
			sum_y = posTank_y - (speedTank - 2);
			if((sum_x > 0) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y -= ((speedTank - 2));
				}
			}
			break;
		case 25:
		case -335:
			sum_x = posTank_x - speedTank;
			sum_y = posTank_y - (speedTank - 2);
			if((sum_x > 0) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y -= ((speedTank - 2));
				}
			}
			break;
		case 30:
		case -330:
			sum_x = posTank_x - speedTank;
			sum_y = posTank_y - (speedTank - 2);
			if((sum_x > 0) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y -= ((speedTank - 2));
				}
			}
			break;
		case 35:
		case -325:
			sum_x = posTank_x - speedTank;
			sum_y = posTank_y - (speedTank - 1);
			if((sum_x > 0) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y -= ((speedTank - 1));
				}
			}
			break;
		case 40:
		case -320:
			sum_x = posTank_x - speedTank;
			sum_y = posTank_y - (speedTank - 1);
			if((sum_x > 0) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y -= ((speedTank - 1));
				}
			}
			break;
		case 45:
		case -315:
			sum_x = posTank_x - speedTank;
			sum_y = posTank_y - speedTank;
			if((sum_x > 0) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 50:
		case -310:
			sum_x = posTank_x - (speedTank - 1);
			sum_y = posTank_y - speedTank;
			if((sum_x > 0) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank - 1);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 55:
		case -305:
			sum_x = posTank_x - (speedTank - 1);
			sum_y = posTank_y - speedTank;
			if((sum_x > 0) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank - 1);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 60:
		case -300:
			sum_x = posTank_x - (speedTank - 2);
			sum_y = posTank_y - speedTank;
			if((sum_x > 0) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank - 2);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 65:
		case -295:
			sum_x = posTank_x - (speedTank - 2);
			sum_y = posTank_y - speedTank;
			if((sum_x > 0) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank - 2);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 70:
		case -290:
			sum_x = posTank_x - (speedTank - 2);
			sum_y = posTank_y - speedTank;
			if((sum_x > 0) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank - 2);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 75:
		case -285:
			sum_x = posTank_x - (speedTank - 2);
			sum_y = posTank_y - speedTank;
			if((sum_x > 0) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank - 2);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 80:
		case -280:
			sum_x = posTank_x - (speedTank - 3);
			sum_y = posTank_y - speedTank;
			if((sum_x > 0) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank - 3);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 85:
		case -275:
			sum_x = posTank_x - (speedTank - 3);
			sum_y = posTank_y - speedTank;
			if((sum_x > 0) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank - 3);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 90:
		case -270:
			sum_y = posTank_y - speedTank;
			if(sum_y > 0){
				if(sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50))
				{
					break;
				}
				else
				{
					posTank_x += (0);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 95:
		case -265:
			sum_x = posTank_x + (speedTank - 3);
			sum_y = posTank_y - speedTank;
			if((sum_x < 548) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank - 3);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 100:
		case -260:
			sum_x = posTank_x + (speedTank - 3);
			sum_y = posTank_y - speedTank;
			if((sum_x < 548) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank - 3);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 105:
		case -255:
			sum_x = posTank_x + (speedTank - 2);
			sum_y = posTank_y - speedTank;
			if((sum_x < 548) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank - 2);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 110:
		case -250:
			sum_x = posTank_x + (speedTank - 2);
			sum_y = posTank_y - speedTank;
			if((sum_x < 548) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank - 2);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 115:
		case -245:
			sum_x = posTank_x + (speedTank - 2);
			sum_y = posTank_y - speedTank;
			if((sum_x < 548) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank - 2);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 120:
		case -240:
			sum_x = posTank_x + (speedTank - 2);
			sum_y = posTank_y - speedTank;
			if((sum_x < 548) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank - 2);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 125:
		case -235:
			sum_x = posTank_x + (speedTank - 1);
			sum_y = posTank_y - speedTank;
			if((sum_x < 548) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank - 1);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 130:
		case -230:
			sum_x = posTank_x + (speedTank - 1);
			sum_y = posTank_y - speedTank;
			if((sum_x < 548) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank - 1);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 135:
		case -225:
			sum_x = posTank_x + speedTank;
			sum_y = posTank_y - speedTank;
			if((sum_x < 548) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y -= (speedTank);
				}
			}
			break;
		case 140:
		case -220:
			sum_x = posTank_x + speedTank;
			sum_y = posTank_y - (speedTank - 1);
			if((sum_x < 548) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y -= (speedTank - 1);
				}
			}
			break;
		case 145:
		case -215:
			sum_x = posTank_x + speedTank;
			sum_y = posTank_y - (speedTank - 1);
			if((sum_x < 548) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y -= (speedTank - 1);
				}
			}
			break;
		case 150:
		case -210:
			sum_x = posTank_x + speedTank;
			sum_y = posTank_y - (speedTank - 2);
			if((sum_x < 548) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y -= (speedTank - 2);
				}
			}
			break;
		case 155:
		case -205:
			sum_x = posTank_x + speedTank;
			sum_y = posTank_y - (speedTank - 2);
			if((sum_x < 548) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y -= (speedTank - 2);
				}
			}
			break;
		case 160:
		case -200:
			sum_x = posTank_x + speedTank;
			sum_y = posTank_y - (speedTank - 2);
			if((sum_x < 548) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y -= (speedTank - 2);
				}
			}
			break;
		case 165:
		case -195:
			sum_x = posTank_x + speedTank;
			sum_y = posTank_y - (speedTank - 2);
			if((sum_x < 548) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y -= (speedTank - 2);
				}
			}
			break;
		case 170:
		case -190:
			sum_x = posTank_x + speedTank;
			sum_y = posTank_y - (speedTank - 3);
			if((sum_x < 548) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y -= (speedTank - 3);
				}
			}
			break;
		case 175:
		case -185:
			sum_x = posTank_x + speedTank;
			sum_y = posTank_y - (speedTank - 3);
			if((sum_x < 548) && (sum_y > 0)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y -= (speedTank - 3);
				}
			}
			break;
		case 180:
		case -180:
			sum_x = posTank_x + speedTank;
			if(sum_x < 548){
				if(sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y += (0);
				}
			}
			break;
		case -5:
		case 355:
			sum_x = posTank_x - speedTank;
			sum_y = posTank_y + (speedTank - 3);
			if((sum_x > 0) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y += (speedTank - 3);
				}
			}
			break;
		case -10:
		case 350:
			sum_x = posTank_x - speedTank;
			sum_y = posTank_y + (speedTank - 3);
			if((sum_x > 0) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y += (speedTank - 3);
				}
			}
			break;
		case -15:
		case 345:
			sum_x = posTank_x - speedTank;
			sum_y = posTank_y + (speedTank - 2);
			if((sum_x > 0) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y += (speedTank - 2);
				}
			}
			break;
		case -20:
		case 340:
			sum_x = posTank_x - speedTank;
			sum_y = posTank_y + (speedTank - 2);
			if((sum_x > 0) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y += (speedTank - 2);
				}
			}
			break;
		case -25:
		case 335:
			sum_x = posTank_x - speedTank;
			sum_y = posTank_y + (speedTank - 2);
			if((sum_x > 0) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y += (speedTank - 2);
				}
			}
			break;
		case -30:
		case 330:
			sum_x = posTank_x - speedTank;
			sum_y = posTank_y + (speedTank - 2);
			if((sum_x > 0) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y += (speedTank - 2);
				}
			}
			break;
		case -35:
		case 325:
			sum_x = posTank_x - speedTank;
			sum_y = posTank_y + (speedTank - 1);
			if((sum_x > 0) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y += (speedTank - 1);
				}
			}
			break;
		case -40:
		case 320:
			sum_x = posTank_x - speedTank;
			sum_y = posTank_y + (speedTank - 1);
			if((sum_x > 0) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y += (speedTank - 1);
				}
			}
			break;
		case -45:
		case 315:
			sum_x = posTank_x - speedTank;
			sum_y = posTank_y + speedTank;
			if((sum_x > 0) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank);
					posTank_y += (speedTank);
				}
			}
			break;
		case -50:
		case 310:
			sum_x = posTank_x - (speedTank - 1);
			sum_y = posTank_y + speedTank;
			if((sum_x > 0) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank - 1);
					posTank_y += (speedTank);
				}
			}
			break;
		case -55:
		case 305:
			sum_x = posTank_x - (speedTank - 1);
			sum_y = posTank_y + speedTank;
			if((sum_x > 0) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank - 1);
					posTank_y += (speedTank);
				}
			}
			break;
		case -60:
		case 300:
			sum_x = posTank_x - (speedTank - 2);
			sum_y = posTank_y + speedTank;
			if((sum_x > 0) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank - 2);
					posTank_y += (speedTank);
				}
			}
			break;
		case -65:
		case 295:
			sum_x = posTank_x - (speedTank - 2);
			sum_y = posTank_y + speedTank;
			if((sum_x > 0) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank - 2);
					posTank_y += (speedTank);
				}
			}
			break;
		case -70:
		case 290:
			sum_x = posTank_x - (speedTank - 2);
			sum_y = posTank_y + speedTank;
			if((sum_x > 0) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank - 2);
					posTank_y += (speedTank);
				}
			}
			break;
		case -75:
		case 285:
			sum_x = posTank_x - (speedTank - 2);
			sum_y = posTank_y + speedTank;
			if((sum_x > 0) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank - 2);
					posTank_y += (speedTank);
				}
			}
			break;
		case -80:
		case 280:
			sum_x = posTank_x - (speedTank - 3);
			sum_y = posTank_y + speedTank;
			if((sum_x > 0) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank - 3);
					posTank_y += (speedTank);
				}
			}
			break;
		case -85:
		case 275:
			sum_x = posTank_x - (speedTank - 3);
			sum_y = posTank_y + speedTank;
			if((sum_x > 0) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x -= (speedTank - 3);
					posTank_y += (speedTank);
				}
			}
			break;
		case -90:
		case 270:
			sum_y = posTank_y + speedTank;
			if(sum_y < 450){
				if(sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50))
				{
					break;
				}
				else
				{
					posTank_x += (0);
					posTank_y += (speedTank);
				}
			}
			break;
		case -95:
		case 265:
			sum_x = posTank_x + (speedTank - 3);
			sum_y = posTank_y + speedTank;
			if((sum_x < 548) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank - 3);
					posTank_y += (speedTank);
				}
			}
			break;
		case -100:
		case 260:
			sum_x = posTank_x + (speedTank - 3);
			sum_y = posTank_y + speedTank;
			if((sum_x < 548) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank - 3);
					posTank_y += (speedTank);
				}
			}
			break;
		case -105:
		case 255:
			sum_x = posTank_x + (speedTank - 2);
			sum_y = posTank_y + speedTank;
			if((sum_x < 548) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank - 2);
					posTank_y += (speedTank);
				}
			}
			break;
		case -110:
		case 250:
			sum_x = posTank_x + (speedTank - 2);
			sum_y = posTank_y + speedTank;
			if((sum_x < 548) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank - 2);
					posTank_y += (speedTank);
				}
			}
			break;
		case -115:
		case 245:
			sum_x = posTank_x + (speedTank - 2);
			sum_y = posTank_y + speedTank;
			if((sum_x < 548) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank - 2);
					posTank_y += (speedTank);
				}
			}
			break;
		case -120:
		case 240:
			sum_x = posTank_x + (speedTank - 2);
			sum_y = posTank_y + speedTank;
			if((sum_x < 548) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank - 2);
					posTank_y += (speedTank);
				}
			}
			break;
		case -125:
		case 235:
			sum_x = posTank_x + (speedTank - 1);
			sum_y = posTank_y + speedTank;
			if((sum_x < 548) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank - 1);
					posTank_y += (speedTank);
				}
			}
			break;
		case -130:
		case 230:
			sum_x = posTank_x + (speedTank - 1);
			sum_y = posTank_y + speedTank;
			if((sum_x < 548) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank - 1);
					posTank_y += (speedTank);
				}
			}
			break;
		case -135:
		case 225:
			sum_x = posTank_x + speedTank;
			sum_y = posTank_y + speedTank;
			if((sum_x < 548) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y += (speedTank);
				}
			}
			break;
		case -140:
		case 220:
			sum_x = posTank_x + speedTank;
			sum_y = posTank_y + (speedTank - 1);
			if((sum_x < 548) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y += (speedTank - 1);
				}
			}
			break;
		case -145:
		case 215:
			sum_x = posTank_x + speedTank;
			sum_y = posTank_y + (speedTank - 1);
			if((sum_x < 548) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y += (speedTank - 1);
				}
			}
			break;
		case -150:
		case 210:
			sum_x = posTank_x + speedTank;
			sum_y = posTank_y + (speedTank - 2);
			if((sum_x < 548) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y += (speedTank - 2);
				}
			}
			break;
		case -155:
		case 205:
			sum_x = posTank_x + speedTank;
			sum_y = posTank_y + (speedTank - 2);
			if((sum_x < 548) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y += (speedTank - 2);
				}
			}
			break;
		case -160:
		case 200:
			sum_x = posTank_x + speedTank;
			sum_y = posTank_y + (speedTank - 2);
			if((sum_x < 548) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y += (speedTank - 2);
				}
			}
			break;
		case -165:
		case 195:
			sum_x = posTank_x + speedTank;
			sum_y = posTank_y + (speedTank - 2);
			if((sum_x < 548) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y += (speedTank - 2);
				}
			}
			break;
		case -170:
		case 190:
			sum_x = posTank_x + speedTank;
			sum_y = posTank_y + (speedTank - 3);
			if((sum_x < 548) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y += (speedTank - 3);
				}
			}
			break;
		case -175:
		case 185:
			sum_x = posTank_x + speedTank;
			sum_y = posTank_y + (speedTank - 3);
			if((sum_x < 548) && (sum_y < 450)){
				if((sum_x >= posTankPosHitT_x && sum_x <= (posTankPosHitT_x + 50)) && (sum_y >= posTankPosHitT_y && sum_y <= (posTankPosHitT_y + 50)))
				{
					break;
				}
				else
				{
					posTank_x += (speedTank);
					posTank_y += (speedTank - 3);
				}
			}
			break;		
	}
}
