import com.syntaxshowdown.syntaxshown.models.Attack;
import com.syntaxshowdown.syntaxshown.models.Defence;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;
import com.syntaxshowdown.syntaxshown.models.Character;

public class TestCharacter {

    Character html;
    Character java;
    Character postgress;

    @Before
    public void setUp(){

        html = new Character("html", "frontend", 100);
        java = new Character("java", "backend", 100);
        postgress = new Character("postgress", "database", 100);

    }

    @Test
    public void hasName(){
    assertEquals("html", html.getName());
    }

    @Test
    public void hasType(){
        assertEquals("frontend", html.getType());
    }

    @Test
    public void hasHp(){
        assertEquals(100, html.getHp());
    }

    @Test
    public void canAddAttacks(){
        html.addAttack(Attack.LET);
        html.addAttack(Attack.CONST);
        html.addAttack(Attack.ARRAY);
        assertEquals(3,html.getNoOfAttacks());
    }

    @Test
    public void canAddDefence(){
        java.addDefence(Defence.FETCH);
        java.addDefence(Defence.GITPUSH);
        java.addDefence(Defence.GUARD);
        assertEquals(3, java.getNoOfDefences());
    }

    @Test
    public void hasAttackvalue(){
        assertEquals(10, Attack.LET.getAttackvalue());
    }

    @Test
    public void hasDefenceValue(){
        assertEquals(20, Defence.GUARD.getDefencevalue());
    }



}
