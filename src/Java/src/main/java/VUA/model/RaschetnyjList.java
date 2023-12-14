package VUA.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import VUA.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: РасчетныйЛист
 */
@Entity(name = "IISVUAРасчетныйЛист")
@Table(schema = "public", name = "РасчетныйЛист")
public class RaschetnyjList {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодДок")
    private Integer коддок;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SotrudnikiKu")
    @Convert("SotrudnikiKu")
    @Column(name = "СотрудникиКу", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikikuid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SotrudnikiKu", insertable = false, updatable = false)
    private SotrudnikiKu sotrudnikiku;

    @OneToMany(mappedBy = "raschetnyjlist", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SostavRascheta> sostavraschetas;


    public RaschetnyjList() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодДок() {
      return коддок;
    }

    public void setКодДок(Integer коддок) {
      this.коддок = коддок;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}